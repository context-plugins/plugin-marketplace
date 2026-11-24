from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1CommonNameConfig(SdkBaseModel):
    name: Optional[str] = UNSET
    match_wild_cards: Optional[bool] = Field(default=UNSET, alias="matchWildCards")


class GoogleCloudApigeeV1CommonNameConfigDict(TypedDict):
    name: NotRequired[str]
    match_wild_cards: NotRequired[bool]
