from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Domains(SdkBaseModel):
    homepage: Optional[str] = UNSET
    email: Optional[str] = UNSET


class DomainsDict(TypedDict):
    homepage: NotRequired[str]
    email: NotRequired[str]
