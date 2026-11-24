from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HttpRedirect(SdkBaseModel):
    redirect_from: Optional[str] = Field(default=UNSET, alias="RedirectFrom")
    """The URL including the domain to be validated. The certificate authority sends GET requests here during
    validation."""

    redirect_to: Optional[str] = Field(default=UNSET, alias="RedirectTo")
    """The URL hosting the validation token. RedirectFrom must return this content or redirect here."""


class HttpRedirectDict(TypedDict):
    redirect_from: NotRequired[str]
    redirect_to: NotRequired[str]
