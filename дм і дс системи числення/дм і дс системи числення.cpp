

#include <iostream>
#include <cmath>
#include <Windows.h>
using namespace std;
int a, s, d, N, k,o,w;

int arr[100], pho[100];
int main()
{ 
    do{
    SetConsoleCP(1251);
    SetConsoleOutputCP(1251);
    cout << "Введіть 1 якщо хочете перевести число в десятичну систему відліку ,або введіть будь яке інше число, якщо хочете перевести число з десяткової системи відліку у іншу\n";
    cin >> s  ;
    cout << "\nВведіть систему відліку з якої будете переводити число,або в яку треба перевести\n";
    cin >> o;
    cout << "\nВведіть число яке треба перевести\n";
    cin >> d;

    int i; N = 0;
    w = 1;

    //перевод числа в 10 систему відліку
    if (s == 1)
    {
        for (i = 0; i < 99; i++) { arr[i] = d % 10; d = d / 10; }//розбивает число на цифри в обратном порядке
        for (i = 0; i < 99; i++) { N = N + arr[i] * pow(o, i); }
        cout << N;
    }
    else
    {
        //перевод числа с 10 системы отщета в другую   
        i = 0;
        while (d != 0)
        {
            pho[i] = d % o;
            d = d / o;

            i++;

        }
        o = i;
        i = i - 1;
        if (pho[o] != 0)
        {
            cout << pho[o];
        }
        while (i > 0 || i == 0)
        {
            cout << pho[i];
            i--;
        } 
    
    }
  cout << "\n якщо бажаете перевести ще якесь число введіть 0 інакше введіть будь-яке інше число\n";
        cin >> w;
    }while (w == 0);
    return 0;

}

    


