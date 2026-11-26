from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .budget_member_bulk_upsert_dto import BudgetMemberBulkUpsertDto, BudgetMemberBulkUpsertDtoDict


class BudgetMemberBulkUpsertRequestDto(SdkBaseModel):
    """Update multiple budget members"""

    members: list[BudgetMemberBulkUpsertDto]
    """List of budget member updates"""


class BudgetMemberBulkUpsertRequestDtoDict(TypedDict):
    members: list[BudgetMemberBulkUpsertDtoDict]
