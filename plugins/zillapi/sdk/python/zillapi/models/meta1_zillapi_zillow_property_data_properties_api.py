from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Meta1ZillapiZillowPropertyDataPropertiesApi(SdkBaseModel):
    tour_eligibility: Optional[Any] = UNSET


class Meta1ZillapiZillowPropertyDataPropertiesApiDict(TypedDict):
    tour_eligibility: NotRequired[Any]
