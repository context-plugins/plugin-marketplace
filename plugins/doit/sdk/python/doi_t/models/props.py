from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Props(SdkBaseModel):
    """Component properties. For the "prop" category contains the matched property key-value pairs."""

    service_type: Optional[str] = UNSET
    """Cloud service type (e.g. AWS::EC2::Instance)."""


class PropsDict(TypedDict):
    service_type: NotRequired[str]
