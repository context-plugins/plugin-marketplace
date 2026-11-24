from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .result1 import Result1, Result1Dict
from .x_plinth_plinth_us_grants_data_resolve_api import (
    XPlinthPlinthUsGrantsDataResolveApi,
    XPlinthPlinthUsGrantsDataResolveApiDict,
)


class ApiV1SearchResponse(SdkBaseModel):
    mode: Optional[str] = UNSET
    """The matching mode actually served. Always ``text`` today: the vector index is unpopulated, so semantic matching
    is not offered and the ``mode`` REQUEST parameter is deliberately not part of this contract. Sending one is not an
    error — it comes back named in ``x_plinth.warnings``. Present on EVERY response, including errors and the
    too-short-query case."""

    results: Optional[list[Result1]] = UNSET
    x_plinth: Optional[XPlinthPlinthUsGrantsDataResolveApi] = UNSET
    """Present only when something needs saying: ``warnings[]`` names any parameter this endpoint does not accept or
    could not honour, and ``unsupported[]`` lists the fatal ones. Same shape as the grant endpoints."""


class ApiV1SearchResponseDict(TypedDict):
    mode: NotRequired[str]
    results: NotRequired[list[Result1Dict]]
    x_plinth: NotRequired[XPlinthPlinthUsGrantsDataResolveApiDict]
