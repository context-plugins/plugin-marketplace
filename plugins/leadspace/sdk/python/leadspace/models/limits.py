from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Limits(SdkBaseModel):
    result_per_account: int = Field(default=10, alias="resultPerAccount")
    """Max leads retrieved per expanded account"""


class LimitsDict(TypedDict):
    result_per_account: NotRequired[int]
