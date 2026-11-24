from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RemoveCustomFieldParams(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    field_id: UUID
    """The unique public ID for the CustomField."""


class RemoveCustomFieldParamsDict(TypedDict):
    field_id: UUID
