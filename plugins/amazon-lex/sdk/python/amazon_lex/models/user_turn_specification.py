from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .user_turn_input_specification import UserTurnInputSpecification, UserTurnInputSpecificationDict
from .user_turn_output_specification import UserTurnOutputSpecification, UserTurnOutputSpecificationDict


class UserTurnSpecification(SdkBaseModel):
    input: UserTurnInputSpecification
    expected: UserTurnOutputSpecification


class UserTurnSpecificationDict(TypedDict):
    input: UserTurnInputSpecificationDict
    expected: UserTurnOutputSpecificationDict
