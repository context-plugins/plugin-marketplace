from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_deliverd_dev_policies_api import SourceDeliverdDevPoliciesApi, SourceDeliverdDevPoliciesApiDict


class ApiV1PoliciesRequest(SdkBaseModel):
    name: str
    """What this policy is about, as an administrator will read it in a list"""

    description: Optional[str] = UNSET
    """What it is for, for whoever reads it next year"""

    rules: Optional[list[Any]] = UNSET
    """Rules to store as version 1. Omit to create the policy empty"""

    activate: Optional[bool] = UNSET
    """Put that first version in force immediately. Ignored without ``rules``"""

    note: Optional[str] = UNSET
    """Why this version exists, for the audit trail"""

    source: Optional[SourceDeliverdDevPoliciesApi] = UNSET
    """The repository these rules are kept in. Marks the version as managed in Git"""


class ApiV1PoliciesRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    rules: NotRequired[list[Any]]
    activate: NotRequired[bool]
    note: NotRequired[str]
    source: NotRequired[SourceDeliverdDevPoliciesApiDict]
