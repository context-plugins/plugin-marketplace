from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeTapesInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    tape_arns: Optional[list[str]] = Field(default=UNSET, alias="TapeARNs")
    """Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you want to describe.
    If this parameter is not specified, Tape gateway returns a description of all virtual tapes associated with the
    specified gateway."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """A marker value, obtained in a previous call to DescribeTapes. This marker indicates which page of results to
    retrieve. If not specified, the first page of results is retrieved."""

    limit: Optional[int] = Field(default=UNSET, alias="Limit")
    """Specifies that the number of virtual tapes described be limited to the specified number. Amazon Web Services may
    impose its own limit, if this field is not set."""


class DescribeTapesInputDict(TypedDict):
    gateway_arn: str
    tape_arns: NotRequired[list[str]]
    marker: NotRequired[str]
    limit: NotRequired[int]
