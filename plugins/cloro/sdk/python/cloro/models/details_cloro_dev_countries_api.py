from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DetailsCloroDevCountriesApi(SdkBaseModel):
    id: Optional[str] = UNSET


class DetailsCloroDevCountriesApiDict(TypedDict):
    id: NotRequired[str]
