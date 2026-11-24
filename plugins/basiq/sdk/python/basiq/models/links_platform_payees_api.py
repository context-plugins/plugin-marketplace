from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LinksPlatformPayeesApi(SdkBaseModel):
    self: Optional[str] = UNSET
    """A link to the payee details."""


class LinksPlatformPayeesApiDict(TypedDict):
    self: NotRequired[str]
