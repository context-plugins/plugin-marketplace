from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ErrorDeliverdDevPoliciesApi(SdkBaseModel):
    code: Literal["invalid_rules"] = "invalid_rules"
    message: str
    details: list[str]
    """One line per problem"""


class ErrorDeliverdDevPoliciesApiDict(TypedDict):
    code: Literal["invalid_rules"]
    message: str
    details: list[str]
