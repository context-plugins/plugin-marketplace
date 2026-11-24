from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum_commonelements_com_change_feed_api import (
    DatumCommonelementsComChangeFeedApi,
    DatumCommonelementsComChangeFeedApiDict,
)


class ApiV1ChangesResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[DatumCommonelementsComChangeFeedApi]


class ApiV1ChangesResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[DatumCommonelementsComChangeFeedApiDict]
