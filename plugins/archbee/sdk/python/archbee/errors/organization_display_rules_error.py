from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.team_display_rules400_error1 import TeamDisplayRules400Error1

OrganizationDisplayRulesErrorBody: TypeAlias = TeamDisplayRules400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _OrganizationDisplayRulesError:
    def map(self, status_code: int, content: bytes) -> OrganizationDisplayRulesErrorBody:
        match status_code:
            case 400:
                return decode_json[TeamDisplayRules400Error1](content)
            case _:
                return RawError(status_code, content)


organization_display_rules_error_mapper: Final[
    ErrorMapper[OrganizationDisplayRulesErrorBody]
] = _OrganizationDisplayRulesError()
