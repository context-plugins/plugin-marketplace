from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.from_model import FromModelOrStr
from .enums.to import ToOrStr


class DomainValidationMethodUpdateSummary(SdkBaseModel):
    from_: Optional[FromModelOrStr] = Field(default=UNSET, alias="From")
    """The validation method that the certificate was using before the update."""

    to: Optional[ToOrStr] = Field(default=UNSET, alias="To")
    """The target validation method for the update."""


class DomainValidationMethodUpdateSummaryDict(TypedDict):
    from_: NotRequired[FromModelOrStr]
    to: NotRequired[ToOrStr]
