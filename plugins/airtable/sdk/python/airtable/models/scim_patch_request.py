from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .operation import Operation, OperationDict


class ScimPatchRequest(SdkBaseModel):
    """A SCIM 2.0 PATCH request with one or more operations."""

    schemas: list[str]
    operations: list[Operation] = Field(alias="Operations")
    """The list of PATCH operations to apply."""


class ScimPatchRequestDict(TypedDict):
    schemas: list[str]
    operations: list[OperationDict]
