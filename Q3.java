import java.util.Scanner;

public class Q3 {
    public static String Rong(String[] strs) {
        if (strs == null || strs.length < 1 || strs.length > 200) {
            return "";
        }

        StringBuilder result = new StringBuilder();

        for (int i = 0; i < strs[0].length(); i++) {
            char ch = strs[0].charAt(i);

            for (int j = 1; j < strs.length; j++) {
                if (strs[j].charAt(i) != ch) {
                    return result.toString();
                }
            }

            result.append(ch);
        }

        return result.toString();
    }

    public static void main(String[] args) {
        Scanner a = new Scanner(System.in);

        System.out.println("n: ");
        int n = a.nextInt();
        if(n < 1 || n > 200){
            System.out.println("-error-");
            return;
        }

        String[] arr = new String[n];
        System.out.println("word: ");
        for(int i=0;i<n;i++){
            arr[i] = a.next();
            if(arr[i].length() < 0 || arr[i].length() > 200){
                System.out.println("-error-");
                return;
            }
        }

        String commonPrefix = Rong(arr);
        System.out.println(commonPrefix);

    }
}
