from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code(str, Enum):
    """Error sub-code; each has a docs page at https://stayingapi.com/docs/errors/<code>."""

    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_DATE_RANGE = "invalid_date_range"
    DATE_IN_PAST = "date_in_past"
    CHILD_AGES_MISMATCH = "child_ages_mismatch"
    STAY_TOO_LONG = "stay_too_long"
    WINDOW_TOO_LONG = "window_too_long"
    INVALID_LISTING_URL = "invalid_listing_url"
    INVALID_PROPERTY_TYPE = "invalid_property_type"
    INVALID_AMENITY = "invalid_amenity"
    INVALID_PRICE_RANGE = "invalid_price_range"
    INVALID_LANGUAGE = "invalid_language"
    INVALID_SORT = "invalid_sort"
    INVALID_CURSOR = "invalid_cursor"
    LIMIT_OUT_OF_RANGE = "limit_out_of_range"
    MUTUALLY_EXCLUSIVE_PARAMS = "mutually_exclusive_params"
    PLATFORM_NOT_ENABLED = "platform_not_enabled"
    NO_ENABLED_PLATFORM = "no_enabled_platform"
    NEEDS_COUNTRY = "needs_country"
    MISSING_API_KEY = "missing_api_key"
    INVALID_API_KEY = "invalid_api_key"
    REVOKED_API_KEY = "revoked_api_key"
    SCOPE_INSUFFICIENT = "scope_insufficient"
    EMAIL_UNVERIFIED = "email_unverified"
    SUBSCRIPTION_REQUIRED = "subscription_required"
    LISTING_NOT_FOUND = "listing_not_found"
    JOB_NOT_FOUND = "job_not_found"
    IDENTITY_MISMATCH = "identity_mismatch"
    CREDIT_BALANCE_TOO_LOW = "credit_balance_too_low"
    RATE_LIMIT_EXCEEDED = "rate_limit_exceeded"
    ALL_ACTORS_FAILED = "all_actors_failed"
    ACTOR_BLOCKED = "actor_blocked"
    UPSTREAM_DEGRADED = "upstream_degraded"
    ACTOR_TIMEOUT = "actor_timeout"
    INTERNAL_ERROR = "internal_error"

    __str__ = str.__str__


CodeOrStr: TypeAlias = Annotated[Code | str, open_enum_validator(Code)]
