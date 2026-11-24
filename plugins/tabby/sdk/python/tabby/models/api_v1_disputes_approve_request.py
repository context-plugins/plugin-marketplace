from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1DisputesApproveRequest(SdkBaseModel):
    dispute_ids: list[UUID]
    """Array of dispute ids. Only 20 disputes can be approved within a single request."""


class ApiV1DisputesApproveRequestDict(TypedDict):
    dispute_ids: list[UUID]
