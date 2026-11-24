from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageFormsDiscardResponse(SdkBaseModel):
    id: str
    changed: bool
    schema_value: Any = Field(alias="schema")
    """The live FormSchema that remains."""


class ApiV1ManageFormsDiscardResponseDict(TypedDict):
    id: str
    changed: bool
    schema_value: Any
