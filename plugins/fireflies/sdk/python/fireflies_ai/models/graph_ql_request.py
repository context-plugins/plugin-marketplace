from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GraphQlRequest(SdkBaseModel):
    query: str
    """The GraphQL query or mutation string"""

    variables: Optional[Any] = UNSET
    """Variables referenced in the query string"""

    operation_name: Optional[str] = Field(default=UNSET, alias="operationName")
    """Optional name of the operation to execute (for multi-operation documents)"""


class GraphQlRequestDict(TypedDict):
    query: str
    variables: NotRequired[Any]
    operation_name: NotRequired[str]
