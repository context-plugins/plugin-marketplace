from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiSetColumnAttributesRequestDto(SdkBaseModel):
    column_attributes: Any = Field(alias="columnAttributes")


class PublicApiSetColumnAttributesRequestDtoDict(TypedDict):
    column_attributes: Any
