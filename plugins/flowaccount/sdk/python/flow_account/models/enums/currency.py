from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Currency(int, Enum):
    """1 = USD 3 = GBP 5 = EUR 7 = JPY 9 = HKD 11 = CNY 13 = THB 15 = AUD 33 = BDT 35 = BHD 37 = BND 39 = KHR 41 = CAD
    43 = DKK 45 = INR 47 = IDR 49 = ILS 53 = KRW 55 = LAK 57 = MOP 59 = MYR 61 = MMK 63 = NPR 65 = NZD 67 = NOK 69 = OMR
    71 = PKR 73 = PHP 75 = QAR 77 = RUB 79 = SAR 81 = SEK 83 = SGD 85 = LKR 87 = CHF 89 = TWD 91 = AED 93 = VND 95 = ZAR
    97 = MXN 99 = KWD 101 = CZK 103 = KES 105 = EGP 107 = PLN 109 = IQD 111 = JOD 113 = MVR 115 = PGK 117 = HUF"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_11 = 11
    VALUE_13 = 13
    VALUE_15 = 15
    VALUE_33 = 33
    VALUE_35 = 35
    VALUE_37 = 37
    VALUE_39 = 39
    VALUE_41 = 41
    VALUE_43 = 43
    VALUE_45 = 45
    VALUE_47 = 47
    VALUE_49 = 49
    VALUE_53 = 53
    VALUE_55 = 55
    VALUE_57 = 57
    VALUE_59 = 59
    VALUE_61 = 61
    VALUE_63 = 63
    VALUE_65 = 65
    VALUE_67 = 67
    VALUE_69 = 69
    VALUE_71 = 71
    VALUE_73 = 73
    VALUE_75 = 75
    VALUE_77 = 77
    VALUE_79 = 79
    VALUE_81 = 81
    VALUE_83 = 83
    VALUE_85 = 85
    VALUE_87 = 87
    VALUE_89 = 89
    VALUE_91 = 91
    VALUE_93 = 93
    VALUE_95 = 95
    VALUE_97 = 97
    VALUE_99 = 99
    VALUE_101 = 101
    VALUE_103 = 103
    VALUE_105 = 105
    VALUE_107 = 107
    VALUE_109 = 109
    VALUE_111 = 111
    VALUE_113 = 113
    VALUE_115 = 115
    VALUE_117 = 117

    __str__ = str.__str__


CurrencyOrInt: TypeAlias = Annotated[Currency | int, open_enum_validator(Currency)]
