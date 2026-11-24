from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompiledCompanyAddress(SdkBaseModel):
    description: Optional[str] = UNSET
    """Description of the company location"""

    street: Optional[str] = UNSET
    """Street of the company address"""

    city: Optional[str] = UNSET
    """City of the company address"""

    region: Optional[str] = UNSET
    """Region of the company address"""

    region_code: Optional[str] = UNSET
    """Region code of the company address"""

    postal_code: Optional[str] = UNSET
    """Postal code of the company address"""

    country: Optional[str] = UNSET
    """Country of the company address"""

    country_code: Optional[str] = UNSET
    """Country code of the company address"""


class CompiledCompanyAddressDict(TypedDict):
    description: NotRequired[str]
    street: NotRequired[str]
    city: NotRequired[str]
    region: NotRequired[str]
    region_code: NotRequired[str]
    postal_code: NotRequired[str]
    country: NotRequired[str]
    country_code: NotRequired[str]
