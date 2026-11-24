from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_deliverd_dev_policies_api import SourceDeliverdDevPoliciesApi, SourceDeliverdDevPoliciesApiDict


class ApiV1PoliciesVersionsRequest(SdkBaseModel):
    rules: list[Any]
    """The complete rule set for this version, not a patch"""

    note: Optional[str] = UNSET
    """Why this version exists, for the audit trail"""

    activate: Optional[bool] = UNSET
    """Put it in force as well as storing it"""

    source: Optional[SourceDeliverdDevPoliciesApi] = UNSET
    """The repository these rules are kept in. Marks the version as managed in Git"""

    skip_unchanged: Optional[bool] = Field(default=UNSET, alias="skipUnchanged")
    """Store nothing when the version in force already has exactly these rules. For CI, which pushes on every merge"""


class ApiV1PoliciesVersionsRequestDict(TypedDict):
    rules: list[Any]
    note: NotRequired[str]
    activate: NotRequired[bool]
    source: NotRequired[SourceDeliverdDevPoliciesApiDict]
    skip_unchanged: NotRequired[bool]
