from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Number(int, Enum):
    VALUE_1001 = 1001
    VALUE_1002 = 1002
    VALUE_1101 = 1101
    VALUE_1201 = 1201
    VALUE_1301 = 1301
    VALUE_2001 = 2001
    VALUE_2002 = 2002
    VALUE_2101 = 2101
    VALUE_3001 = 3001
    VALUE_3002 = 3002
    VALUE_3003 = 3003
    VALUE_3004 = 3004
    VALUE_3005 = 3005
    VALUE_3006 = 3006
    VALUE_3007 = 3007
    VALUE_4001 = 4001
    VALUE_4002 = 4002
    VALUE_4003 = 4003
    VALUE_4004 = 4004
    VALUE_4005 = 4005
    VALUE_4101 = 4101
    VALUE_4102 = 4102
    VALUE_4103 = 4103
    VALUE_4104 = 4104
    VALUE_4105 = 4105
    VALUE_4106 = 4106
    VALUE_5001 = 5001
    VALUE_5002 = 5002
    VALUE_5003 = 5003
    VALUE_5004 = 5004
    VALUE_5005 = 5005
    VALUE_5101 = 5101
    VALUE_9001 = 9001
    VALUE_9002 = 9002

    __str__ = str.__str__


NumberOrInt: TypeAlias = Annotated[Number | int, open_enum_validator(Number)]
