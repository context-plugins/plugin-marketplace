from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .graph_ql_error import GraphQlError, GraphQlErrorDict


class GraphQlResponse(SdkBaseModel):
    data: Optional[Any] = UNSET
    """The result data returned by the GraphQL operation"""

    errors: Optional[list[GraphQlError]] = UNSET
    """GraphQL errors, if any"""


class GraphQlResponseDict(TypedDict):
    data: NotRequired[Any]
    errors: NotRequired[list[GraphQlErrorDict]]
