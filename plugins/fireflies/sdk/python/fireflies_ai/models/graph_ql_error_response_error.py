from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .graph_ql_error import GraphQlError, GraphQlErrorDict


class GraphQlErrorResponseError(SdkBaseModel):
    errors: Optional[list[GraphQlError]] = UNSET


class GraphQlErrorResponseErrorDict(TypedDict):
    errors: NotRequired[list[GraphQlErrorDict]]
