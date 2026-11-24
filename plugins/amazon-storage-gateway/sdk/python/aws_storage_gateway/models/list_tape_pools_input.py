from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListTapePoolsInput(SdkBaseModel):
    pool_arns: Optional[list[str]] = Field(default=UNSET, alias="PoolARNs")
    """The Amazon Resource Name (ARN) of each of the custom tape pools you want to list. If you don't specify a custom
    tape pool ARN, the response lists all custom tape pools."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """A string that indicates the position at which to begin the returned list of tape pools."""

    limit: Optional[int] = Field(default=UNSET, alias="Limit")
    """An optional number limit for the tape pools in the list returned by this call."""


class ListTapePoolsInputDict(TypedDict):
    pool_arns: NotRequired[list[str]]
    marker: NotRequired[str]
    limit: NotRequired[int]
