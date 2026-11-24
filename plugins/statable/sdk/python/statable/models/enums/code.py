from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code(str, Enum):
    """Stable machine-readable slug (contract — never changes). The ``ambiguous_domain`` code is emitted only by the MCP
    tools (when a ``site`` domain matches more than one stored site), not by /query."""

    INVALID_REQUEST = "invalid_request"
    METRICS_REQUIRED = "metrics_required"
    UNKNOWN_METRIC = "unknown_metric"
    TOO_MANY_DIMENSIONS = "too_many_dimensions"
    UNKNOWN_DIMENSION = "unknown_dimension"
    INVALID_DATE_RANGE = "invalid_date_range"
    INVALID_INTERVAL = "invalid_interval"
    METRIC_NOT_AVAILABLE = "metric_not_available"
    INVALID_FILTER = "invalid_filter"
    EVENT_FILTER_REQUIRED = "event_filter_required"
    INVALID_COMPARE = "invalid_compare"
    COMPARE_LENGTH_MISMATCH = "compare_length_mismatch"
    SITE_ID_REQUIRED = "site_id_required"
    LIMIT_OFFSET_MISUSE = "limit_offset_misuse"
    UNAUTHORIZED = "unauthorized"
    INSUFFICIENT_SCOPE = "insufficient_scope"
    KEY_NOT_SCOPED = "key_not_scoped"
    TRACKING_INACTIVE = "tracking_inactive"
    UNKNOWN_SITE = "unknown_site"
    UNKNOWN_FUNNEL = "unknown_funnel"
    RATE_LIMITED = "rate_limited"
    INTERNAL = "internal"
    AMBIGUOUS_DOMAIN = "ambiguous_domain"
    INVALID_SCOPE = "invalid_scope"
    SCOPE_ESCALATION = "scope_escalation"
    INVALID_EXPIRY = "invalid_expiry"
    KEY_LIMIT_REACHED = "key_limit_reached"
    API_KEY_NOT_FOUND = "api_key_not_found"
    SELF_MODIFICATION = "self_modification"
    WRITE_DISABLED = "write_disabled"
    TERMS_NOT_ACCEPTED = "terms_not_accepted"
    OTP_INVALID = "otp_invalid"
    SITE_EXISTS = "site_exists"
    DOMAIN_NOT_ALLOWED = "domain_not_allowed"
    EMAIL_UNDELIVERABLE = "email_undeliverable"
    NOT_SITE_OWNER = "not_site_owner"
    IDEMPOTENCY_CONFLICT = "idempotency_conflict"
    GOAL_EXISTS = "goal_exists"
    GOAL_NOT_FOUND = "goal_not_found"
    FUNNEL_EXISTS = "funnel_exists"
    HOBBY_ALWAYS_PUBLIC = "hobby_always_public"
    NOT_FOUND = "not_found"
    METHOD_NOT_ALLOWED = "method_not_allowed"

    __str__ = str.__str__


CodeOrStr: TypeAlias = Annotated[Code | str, open_enum_validator(Code)]
