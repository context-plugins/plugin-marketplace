from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .update_custom_field_dto import UpdateCustomFieldDto, UpdateCustomFieldDtoDict


class BulkUpdateTxCustomFieldRequestDto(SdkBaseModel):
    """Transaction Custom Fields update request dto."""

    custom_fields: list[UpdateCustomFieldDto] = Field(alias="customFields")
    """List of custom field and value updates"""


class BulkUpdateTxCustomFieldRequestDtoDict(TypedDict):
    custom_fields: list[UpdateCustomFieldDtoDict]
