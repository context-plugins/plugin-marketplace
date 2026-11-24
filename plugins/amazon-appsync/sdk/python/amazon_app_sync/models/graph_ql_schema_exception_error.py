from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GraphQlSchemaExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class GraphQlSchemaExceptionErrorDict(TypedDict):
    message: NotRequired[str]
