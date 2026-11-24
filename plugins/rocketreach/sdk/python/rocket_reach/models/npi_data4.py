from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NpiData4(SdkBaseModel):
    """The format of the NPI data that is serialized to the UI on the search page."""

    npi_number: Optional[str] = UNSET
    credentials: Optional[str] = UNSET
    license_number: Optional[str] = UNSET
    specialization: Optional[str] = UNSET


class NpiData4Dict(TypedDict):
    npi_number: NotRequired[str]
    credentials: NotRequired[str]
    license_number: NotRequired[str]
    specialization: NotRequired[str]
