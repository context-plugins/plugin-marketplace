from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JsonApiResource(SdkBaseModel):
    id: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    attributes: Optional[Any] = UNSET
    relationships: Optional[Any] = UNSET


class JsonApiResourceDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[str]
    attributes: NotRequired[Any]
    relationships: NotRequired[Any]
