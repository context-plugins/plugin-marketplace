from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NpiData(SdkBaseModel):
    """List of NPI data objects for the profile"""

    npi_number: Optional[str] = UNSET
    credentials: Optional[str] = UNSET
    license_number: Optional[str] = UNSET
    specialization: Optional[str] = UNSET


class NpiDataDict(TypedDict):
    npi_number: NotRequired[str]
    credentials: NotRequired[str]
    license_number: NotRequired[str]
    specialization: NotRequired[str]
