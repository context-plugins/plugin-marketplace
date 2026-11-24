from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1OperationSchema(SdkBaseModel):
    """The operation schema needed for an operation."""

    json_schema: Optional[dict[str, Any]] = Field(default=UNSET, alias="jsonSchema")
    """The JSON schema. Only valid JSON is accepted but semantic validation of schema is not supported right now."""


class GoogleCloudApihubV1OperationSchemaDict(TypedDict):
    json_schema: NotRequired[dict[str, Any]]
