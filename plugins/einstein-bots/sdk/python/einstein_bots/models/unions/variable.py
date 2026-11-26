from __future__ import annotations

from typing import TypeAlias

from ..boolean_variable import BooleanVariable, BooleanVariableDict
from ..date_time_variable import DateTimeVariable, DateTimeVariableDict
from ..date_variable import DateVariable, DateVariableDict
from ..list_variable import ListVariable, ListVariableDict
from ..money_variable import MoneyVariable, MoneyVariableDict
from ..number_variable import NumberVariable, NumberVariableDict
from ..object_variable import ObjectVariable, ObjectVariableDict
from ..ref_variable import RefVariable, RefVariableDict
from ..text_variable import TextVariable, TextVariableDict

Variable: TypeAlias = (
    BooleanVariable
    | DateVariable
    | DateTimeVariable
    | MoneyVariable
    | NumberVariable
    | TextVariable
    | ObjectVariable
    | RefVariable
    | ListVariable
)

VariableDict: TypeAlias = (
    BooleanVariableDict
    | DateVariableDict
    | DateTimeVariableDict
    | MoneyVariableDict
    | NumberVariableDict
    | TextVariableDict
    | ObjectVariableDict
    | RefVariableDict
    | ListVariableDict
)
