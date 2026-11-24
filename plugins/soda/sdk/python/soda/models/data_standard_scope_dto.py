from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_standard_scope_rule_dto import DataStandardScopeRuleDto, DataStandardScopeRuleDtoDict


class DataStandardScopeDto(SdkBaseModel):
    rules: Optional[list[DataStandardScopeRuleDto]] = UNSET


class DataStandardScopeDtoDict(TypedDict):
    rules: NotRequired[list[DataStandardScopeRuleDtoDict]]
