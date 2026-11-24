from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum1_commonelements_com_change_feed_api import (
    Datum1CommonelementsComChangeFeedApi,
    Datum1CommonelementsComChangeFeedApiDict,
)


class ApiV1ChangesSummaryResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[Datum1CommonelementsComChangeFeedApi]


class ApiV1ChangesSummaryResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[Datum1CommonelementsComChangeFeedApiDict]
