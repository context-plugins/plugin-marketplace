from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DomainDeprecatedFaultError(SdkBaseModel):
    message: Optional[str] = UNSET
    """A description that may help with diagnosing the cause of the fault."""


class DomainDeprecatedFaultErrorDict(TypedDict):
    message: NotRequired[str]
