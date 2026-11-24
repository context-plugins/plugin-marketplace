from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IssuerJwtResponse(SdkBaseModel):
    """An object describing a JWT"""

    jwt: Optional[str] = UNSET


class IssuerJwtResponseDict(TypedDict):
    jwt: NotRequired[str]
