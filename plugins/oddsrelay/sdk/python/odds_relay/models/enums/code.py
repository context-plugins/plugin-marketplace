from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code(str, Enum):
    """Stable machine code; branch on this, never on ``message``."""

    ACCOUNT_SUSPENDED = "account_suspended"
    NOT_IN_KEY_SCOPE = "not_in_key_scope"
    PRODUCT_NOT_IN_REGION = "product_not_in_region"
    ORIGIN_NOT_ALLOWED = "origin_not_allowed"
    REGION_NOT_IN_SCOPE = "region_not_in_scope"
    BOOKMAKER_NOT_IN_REGION = "bookmaker_not_in_region"
    BOOKMAKER_NOT_IN_PLAN = "bookmaker_not_in_plan"
    SPORT_NOT_IN_PLAN = "sport_not_in_plan"
    MARKET_NOT_IN_PLAN = "market_not_in_plan"
    EXCHANGE_NOT_IN_PLAN = "exchange_not_in_plan"
    SCHEMA_NOT_IN_SCOPE = "schema_not_in_scope"

    __str__ = str.__str__


CodeOrStr: TypeAlias = Annotated[Code | str, open_enum_validator(Code)]
