from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IpoRegistrarInfo1(SdkBaseModel):
    """Registrar handling the issue"""

    name: Optional[str] = UNSET
    """Name of the registrar handling the issue"""

    email: Optional[str] = UNSET
    """Contact email for the registrar"""

    contact_name: Optional[str] = UNSET
    """Contact person at the registrar"""

    contact_number: Optional[str] = UNSET
    """Contact number for the registrar"""

    website: Optional[str] = UNSET
    """Registrar's website"""

    registrar: Optional[str] = UNSET
    """SEBI registration number of the registrar"""


class IpoRegistrarInfo1Dict(TypedDict):
    name: NotRequired[str]
    email: NotRequired[str]
    contact_name: NotRequired[str]
    contact_number: NotRequired[str]
    website: NotRequired[str]
    registrar: NotRequired[str]
