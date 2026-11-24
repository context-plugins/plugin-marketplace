from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IssuerJwtRequest(SdkBaseModel):
    jwt: Optional[str] = UNSET
    """JWT by `specification <https://www.semrush.com/apps/docs/server-to-server-api/bearer-token#generate-a-jwt>`__,
    signed by your secret key"""


class IssuerJwtRequestDict(TypedDict):
    jwt: NotRequired[str]
