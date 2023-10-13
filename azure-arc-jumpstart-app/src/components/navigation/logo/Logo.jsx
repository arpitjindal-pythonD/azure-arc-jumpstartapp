import React from "react";
import './Logo.css';

const Logo = (props) => {
    return (
        <div
            style={{
                position: 'relative'
            }}
        >
            <svg
                className="ms-azure-logo-horizontal-c-white-rgb"
                width="114"
                height="17"
                viewBox="0 0 114 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M83.8043 5.31116L82.3711 9.48103H85.2778L83.8516 5.31116H83.8043ZM84.8026 3.47559L88.4529 13.3762H86.6008L85.7423 10.9183H81.923L81.0984 13.3762H79.2598L82.9099 3.47559H84.8026Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M89.2862 6.27783H94.836V6.94771L91.1924 12.0499H94.8562V13.3754H89.0293V12.5813L92.6188 7.60339H89.2862V6.27783Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M102.058 6.27783V13.3754H100.408V12.4431H100.381C100.165 12.7656 99.8753 13.0175 99.5127 13.1992C99.1498 13.3809 98.7433 13.4721 98.2927 13.4721C97.4858 13.4721 96.8719 13.2384 96.4505 12.7711C96.0291 12.304 95.8184 11.578 95.8184 10.593V6.27783H97.4746V10.3927C97.4746 10.9911 97.5906 11.4409 97.8228 11.7425C98.0548 12.0439 98.4051 12.1947 98.8741 12.1947C99.3381 12.1947 99.7097 12.0279 99.9893 11.6942C100.269 11.3605 100.408 10.9242 100.408 10.3858V6.27783H102.058Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M106.757 6.1604C106.888 6.1604 107.005 6.16957 107.109 6.1879C107.212 6.20646 107.3 6.22938 107.372 6.25711V7.94866C107.287 7.88404 107.162 7.82331 106.997 7.76555C106.833 7.70803 106.633 7.67938 106.399 7.67938C105.998 7.67938 105.659 7.85195 105.382 8.19709C105.105 8.54246 104.966 9.07392 104.966 9.79193V13.3751H103.33V6.27774H104.966V7.39635H104.993C105.142 7.0095 105.367 6.70699 105.669 6.48835C105.971 6.26995 106.334 6.1604 106.757 6.1604Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M112.238 9.10884C112.238 8.55653 112.113 8.13553 111.863 7.84539C111.613 7.55548 111.26 7.41064 110.805 7.41064C110.413 7.41064 110.062 7.55457 109.751 7.84218C109.44 8.1298 109.232 8.55194 109.129 9.10884H112.238ZM113.286 11.5872V12.9614C113.016 13.1362 112.662 13.2776 112.225 13.3858C111.787 13.494 111.321 13.5481 110.825 13.5481C109.766 13.5481 108.943 13.2284 108.354 12.5885C107.767 11.9489 107.473 11.0581 107.473 9.91655C107.473 8.81673 107.787 7.91079 108.416 7.19989C109.044 6.48852 109.841 6.1333 110.805 6.1333C111.765 6.1333 112.512 6.43329 113.046 7.03396C113.58 7.63464 113.847 8.46426 113.847 9.52305V10.3309H109.088C109.16 11.0443 109.384 11.5423 109.761 11.8254C110.137 12.1086 110.623 12.25 111.217 12.25C111.609 12.25 111.984 12.1891 112.34 12.0671C112.696 11.9452 113.011 11.7853 113.286 11.5872Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.966 7.64549H70.5296V13.3758H68.8737V7.64549H67.7109V6.27846H68.8737V5.29116C68.8737 4.54542 69.1111 3.93444 69.5868 3.45821C70.062 2.98152 70.6714 2.74341 71.4151 2.74341C71.6134 2.74341 71.7891 2.75372 71.9424 2.77458C72.0956 2.79543 72.2309 2.82637 72.3481 2.86762V4.31075C72.2938 4.27866 72.1993 4.23947 72.064 4.19341C71.9289 4.14734 71.7734 4.12443 71.5977 4.12443C71.2551 4.12443 70.9916 4.23351 70.8068 4.45215C70.6219 4.67101 70.5296 4.99438 70.5296 5.42225V6.27846H72.966V4.68339L74.6086 4.17278V6.27846H76.265V7.64549H74.6086V10.966C74.6086 11.4035 74.6864 11.712 74.8419 11.8912C74.9974 12.0709 75.2418 12.1605 75.5752 12.1605C75.6699 12.1605 75.7837 12.1378 75.9167 12.0915C76.0496 12.0457 76.1656 11.9905 76.265 11.9261V13.3066C76.1611 13.3667 75.9888 13.4217 75.7475 13.4725C75.5066 13.523 75.2689 13.5484 75.0344 13.5484C74.3449 13.5484 73.8279 13.3609 73.4832 12.9858C73.1384 12.6106 72.966 12.0457 72.966 11.2905V7.64549ZM62.1015 9.87467C62.1015 10.6158 62.266 11.1819 62.5949 11.5733C62.9237 11.9645 63.3946 12.1598 64.0077 12.1598C64.6025 12.1598 65.0556 11.9645 65.3663 11.5733C65.6773 11.1819 65.8328 10.6018 65.8328 9.83319C65.8328 9.06934 65.6717 8.49273 65.3495 8.10382C65.0273 7.71491 64.5754 7.52057 63.9942 7.52057C63.3946 7.52057 62.9295 7.72407 62.5983 8.13155C62.2669 8.53857 62.1015 9.11999 62.1015 9.87467ZM60.4003 9.92942C60.4003 8.75581 60.7248 7.82604 61.3737 7.14012C62.0227 6.45442 62.924 6.11157 64.0776 6.11157C65.1636 6.11157 66.012 6.44182 66.6228 7.1023C67.2334 7.76302 67.5386 8.65452 67.5386 9.77771C67.5386 10.9284 67.2141 11.8442 66.5654 12.5253C65.9162 13.2066 65.033 13.5472 63.9154 13.5472C62.8383 13.5472 61.9832 13.2241 61.3502 12.5771C60.7169 11.9306 60.4003 11.048 60.4003 9.92942ZM56.7148 8.14237C56.7148 8.38163 56.7893 8.5691 56.938 8.705C57.0866 8.84067 57.4155 9.0121 57.9249 9.21927C58.5783 9.48626 59.037 9.78671 59.3004 10.1204C59.564 10.4541 59.696 10.8579 59.696 11.3321C59.696 11.9994 59.4447 12.5357 58.9423 12.9404C58.4396 13.3458 57.7604 13.5482 56.9042 13.5482C56.6158 13.5482 56.2967 13.5127 55.9476 13.4412C55.5982 13.3699 55.302 13.2789 55.0586 13.1684V11.5255C55.3561 11.737 55.6761 11.905 56.0185 12.0292C56.3611 12.1536 56.6719 12.2158 56.9515 12.2158C57.3208 12.2158 57.5937 12.1628 57.7694 12.0569C57.9451 11.9511 58.0331 11.7739 58.0331 11.5255C58.0331 11.2952 57.9417 11.1006 57.7593 10.942C57.5769 10.7829 57.2309 10.6001 56.7215 10.3929C56.1177 10.1353 55.6898 9.84538 55.4373 9.52316C55.1849 9.20094 55.0586 8.7914 55.0586 8.29409C55.0586 7.65446 55.3076 7.1285 55.8056 6.71644C56.3035 6.30461 56.9493 6.09881 57.7425 6.09881C57.9857 6.09881 58.2583 6.12631 58.5604 6.18131C58.8622 6.23677 59.1146 6.30827 59.3174 6.39559V7.98355C59.1011 7.83619 58.8487 7.70969 58.5604 7.60358C58.2718 7.4977 57.9857 7.44499 57.7019 7.44499C57.3909 7.44499 57.1485 7.50709 56.9751 7.63131C56.8016 7.75552 56.7148 7.92603 56.7148 8.14237ZM48.8476 9.87467C48.8476 10.6158 49.0119 11.1819 49.341 11.5733C49.67 11.9645 50.141 12.1598 50.7538 12.1598C51.3489 12.1598 51.8017 11.9645 52.1125 11.5733C52.4235 11.1819 52.579 10.6018 52.579 9.83319C52.579 9.06934 52.4178 8.49273 52.0956 8.10382C51.7734 7.71491 51.3215 7.52057 50.7403 7.52057C50.141 7.52057 49.6756 7.72407 49.3444 8.13155C49.013 8.53857 48.8476 9.11999 48.8476 9.87467ZM47.1445 9.92942C47.1445 8.75581 47.4689 7.82604 48.1179 7.14012C48.7668 6.45442 49.6682 6.11157 50.8217 6.11157C51.908 6.11157 52.7562 6.44182 53.367 7.1023C53.9775 7.76302 54.2829 8.65452 54.2829 9.77771C54.2829 10.9284 53.9582 11.8442 53.3095 12.5253C52.6606 13.2066 51.7772 13.5472 50.6595 13.5472C49.5824 13.5472 48.7273 13.2241 48.0943 12.5771C47.4611 11.9306 47.1445 11.048 47.1445 9.92942ZM46.4409 6.1604C46.5715 6.1604 46.6889 6.1698 46.7923 6.18836C46.896 6.20669 46.9839 6.22938 47.0562 6.25711V7.94866C46.9705 7.88427 46.8453 7.82331 46.681 7.76578C46.5163 7.70803 46.3168 7.67938 46.0828 7.67938C45.6816 7.67938 45.3425 7.85195 45.0654 8.19709C44.7883 8.54246 44.6496 9.07392 44.6496 9.79193V13.3753H43.0136V6.27797H44.6496V7.39635H44.6766C44.8253 7.00973 45.0506 6.70722 45.3526 6.48835C45.6544 6.26995 46.0173 6.1604 46.4409 6.1604ZM40.1669 12.1602C40.4101 12.1602 40.6783 12.103 40.9711 11.9879C41.2642 11.8726 41.5345 11.7209 41.7825 11.5321V13.0854C41.5211 13.2374 41.2247 13.3524 40.8935 13.4306C40.5625 13.5089 40.1983 13.5481 39.8018 13.5481C38.7786 13.5481 37.9473 13.2179 37.3075 12.5574C36.6674 11.8969 36.3476 11.0536 36.3476 10.0273C36.3476 8.88554 36.6743 7.94569 37.3277 7.20659C37.9811 6.46796 38.9072 6.09875 40.1061 6.09875C40.4126 6.09875 40.7223 6.13909 41.0355 6.21953C41.3487 6.29997 41.5976 6.39302 41.7825 6.4989V8.10084C41.5301 7.912 41.272 7.76601 41.0084 7.6622C40.7449 7.55884 40.4754 7.50704 40.2006 7.50704C39.5561 7.50704 39.0358 7.7211 38.639 8.1492C38.2426 8.57707 38.0442 9.15482 38.0442 9.882C38.0442 10.6 38.2345 11.1594 38.6155 11.5598C38.9963 11.9602 39.5135 12.1602 40.1669 12.1602ZM33.5703 13.3748H35.206V6.27747H33.5703V13.3748ZM33.4004 4.22672C33.4004 3.95056 33.4984 3.71909 33.6946 3.53277C33.8905 3.34622 34.1236 3.25317 34.394 3.25317C34.6823 3.25317 34.9215 3.34874 35.1107 3.53964C35.3001 3.73055 35.3945 3.95973 35.3945 4.22672C35.3945 4.49806 35.2976 4.72609 35.1039 4.90989C34.9101 5.09415 34.6736 5.18605 34.394 5.18605C34.1146 5.18605 33.8792 5.093 33.6878 4.90668C33.496 4.72013 33.4004 4.49348 33.4004 4.22672ZM31.9932 3.47518V13.3756H30.3101V5.61546H30.2829L27.2748 13.3756H26.1596L23.0769 5.61546H23.0567V13.3756H21.502V3.47518H23.9152L26.7003 10.8141H26.7407L29.6813 3.47518H31.9932Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.501953 8.02041H8.18027V0.178223H0.501953V8.02041Z"
                    fill="#F25022"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.97656 8.01724H16.6549V0.175049H8.97656V8.01724Z"
                    fill="#7FBA00"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 16.6747H8.17832V8.83252H0.5V16.6747Z"
                    fill="#00A4EF"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.97656 16.6747H16.6549V8.83252H8.97656V16.6747Z"
                    fill="#FFB900"
                />
            </svg>
            <svg
                className="line-123"
                height="23"
                width="1"
                viewBox="0 0 1 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 0L0 23" stroke="white" strokeLinecap="round" />
            </svg>
            <div className="jumpstart-logo">
                <div className="arc-jumpstart2">Arc Jumpstart </div>
            </div>
        </div>
    )
}

export default Logo;