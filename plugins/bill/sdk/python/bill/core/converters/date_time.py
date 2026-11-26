"""Wire formats for temporal values.

A :class:`DateTimeConverter` is a parse/dump pair for one wire format. Four are defined here --
``RFC3339``, ``RFC1123``, ``UNIX_SECONDS`` and ``DATE`` -- each paired with an ``Annotated`` alias
(``RFC3339DateTime``, ``Date``, …) that wires it into pydantic so a field or parameter declares its
wire format by type alone. The aliases are the whole public surface: every value reaching the wire
is dumped through its declared type's adapter, so the bare converters are only the vehicle that
builds them and are not exported above this package.

Datetimes are required to be timezone-aware in every format that encodes an instant. A naive
datetime has no single correct wire representation, so it is rejected rather than silently assumed
to be UTC or local.

Every rejection raises ``ValueError``, never ``TypeError`` -- including rejections that are *about* a
wrong type. Pydantic wraps ``ValueError`` from a validator into ``ValidationError`` but lets
``TypeError`` escape as a programming error, so a converter that raised ``TypeError`` for unexpected
wire data would surface a bare ``TypeError`` from deserialization instead of the ``ValidationError``
callers catch. Bad wire data is a validation failure, not a bug in the caller's code."""

from __future__ import annotations

import math
import re
from collections.abc import Callable
from dataclasses import dataclass
from datetime import date, datetime, timedelta, timezone
from email.utils import format_datetime, parsedate_to_datetime
from typing import Annotated, Final, Generic, TypeAlias, TypeVar

from pydantic.functional_serializers import PlainSerializer
from pydantic.functional_validators import BeforeValidator

# Bounded rather than constrained to (date, datetime): a datetime *is* a date, so the bound
# admits both while keeping one type parameter.
T = TypeVar("T", bound=date)


@dataclass(frozen=True, slots=True)
class DateTimeConverter(Generic[T]):
    """How one temporal wire format is read and written.

    ``parse`` accepts whatever arrived on the wire -- hence ``object``, narrowed inside each
    implementation -- and ``dump`` produces the JSON scalar the format calls for."""

    parse: Callable[[object], T]
    dump: Callable[[T], str | int]


def _require_tzaware(dt: datetime, *, name: str) -> datetime:
    if dt.tzinfo is None or dt.utcoffset() is None:
        raise ValueError(f"{name}: datetime must be timezone-aware (include UTC offset).")
    return dt


# Explicit [0-9] rather than \d, which also matches non-ASCII decimal digits: fromisoformat
# rejects those anyway, and reshaping a string that is going to be refused only obscures it.
_SUBSECOND: Final = re.compile(r"\.([0-9]+)")


def _parse_rfc3339(value: object) -> datetime:
    if isinstance(value, datetime):
        return _require_tzaware(value, name="RFC3339")

    if not isinstance(value, str):
        raise ValueError("RFC3339: expected RFC3339/ISO8601 string or tz-aware datetime.")

    s = value.strip()
    if not s:
        raise ValueError("RFC3339: datetime string cannot be empty.")

    # Two normalizations, one reason: what fromisoformat accepts is narrower than RFC3339 on the
    # supported floor, and neither gap may be left to vary by interpreter. 'Z' is RFC3339's UTC
    # designator, rejected before 3.11. A fractional second may carry any number of digits
    # (`time-secfrac = "." 1*DIGIT`), where 3.10 accepts exactly three or six -- padding and
    # truncating to six converges on what 3.11+ does natively. Normalizing on every version rather
    # than behind a sys.version_info gate keeps one code path everywhere; a gated branch would
    # also be invisible to mypy, which prunes it at the pinned floor. Both go at the 3.11 floor.
    if s.endswith(("Z", "z")):
        s = s[:-1] + "+00:00"
    s = _SUBSECOND.sub(lambda match: "." + match[1][:6].ljust(6, "0"), s, count=1)

    try:
        dt = datetime.fromisoformat(s)
    except ValueError as e:
        raise ValueError(f"RFC3339: invalid RFC3339/ISO8601 datetime: {value!r}") from e

    return _require_tzaware(dt, name="RFC3339")


def _dump_rfc3339(dt: datetime) -> str:
    dt = _require_tzaware(dt, name="RFC3339")
    # Canonicalize UTC -> 'Z'. Compare the offset to zero directly; asking
    # timezone.utc for its offset just to compare against it is a detour.
    if dt.utcoffset() == timedelta(0):
        return dt.astimezone(timezone.utc).isoformat().replace("+00:00", "Z")
    return dt.isoformat()


RFC3339: Final = DateTimeConverter(parse=_parse_rfc3339, dump=_dump_rfc3339)

RFC3339DateTime: TypeAlias = Annotated[
    datetime,
    BeforeValidator(RFC3339.parse),
    PlainSerializer(RFC3339.dump, return_type=str),
]


def _parse_rfc1123(value: object) -> datetime:
    if isinstance(value, datetime):
        return _require_tzaware(value, name="RFC1123")

    if isinstance(value, str):
        # parsedate_to_datetime raises ValueError for an unparseable string but OverflowError for
        # a year too large for C long. Both are wire data, so both become this module's ValueError.
        try:
            dt = parsedate_to_datetime(value)
        except (ValueError, OverflowError) as e:
            raise ValueError(f"RFC1123: invalid RFC1123 datetime: {value!r}") from e
        return _require_tzaware(dt, name="RFC1123")

    raise ValueError("RFC1123: expected RFC1123 string or tz-aware datetime.")


def _dump_rfc1123(dt: datetime) -> str:
    dt = _require_tzaware(dt, name="RFC1123").astimezone(timezone.utc)
    return format_datetime(dt, usegmt=True)


RFC1123: Final = DateTimeConverter(parse=_parse_rfc1123, dump=_dump_rfc1123)

RFC1123DateTime: TypeAlias = Annotated[
    datetime,
    BeforeValidator(RFC1123.parse),
    PlainSerializer(RFC1123.dump, return_type=str),
]


def _parse_unix_seconds(value: object) -> datetime:
    if isinstance(value, datetime):
        return _require_tzaware(value, name="UNIX_SECONDS")

    # bool is a subclass of int, so it must be rejected before the numeric branch --
    # otherwise True would quietly parse as epoch second 1.
    if isinstance(value, bool):
        raise ValueError("UNIX_SECONDS: expected unix seconds, not a bool.")

    # float() is the gate, so a quoted number is accepted exactly where the unquoted number is and
    # the two can never diverge. It also handles sign and surrounding whitespace, which isdigit()
    # did not. Every epoch a datetime can hold (< 2.6e11) is far inside float's exact-integer
    # range, so routing ints through the same path loses nothing.
    if isinstance(value, (int, float)):
        seconds: float = value
    elif isinstance(value, str):
        try:
            seconds = float(value)
        except ValueError:
            raise ValueError(
                f"UNIX_SECONDS: expected unix seconds (int/float/numeric string) or tz-aware datetime, got {value!r}"
            ) from None
    else:
        raise ValueError(
            "UNIX_SECONDS: expected unix seconds (int/float/numeric string) "
            f"or tz-aware datetime, got {type(value).__name__}"
        )

    # fromtimestamp has three failure modes and only one is a ValueError: NaN raises ValueError,
    # a value beyond time_t raises OverflowError, and one representable in time_t but past
    # datetime.max raises OSError. A milliseconds-for-seconds mixup lands on the latter two.
    try:
        return datetime.fromtimestamp(seconds, tz=timezone.utc)
    except (ValueError, OverflowError, OSError) as e:
        raise ValueError(f"UNIX_SECONDS: not a representable unix-seconds value: {value!r}") from e


def _dump_unix_seconds(dt: datetime) -> int:
    dt = _require_tzaware(dt, name="UNIX_SECONDS").astimezone(timezone.utc)
    # floor, not int(): int() truncates toward zero, which floors positive timestamps but
    # *ceilings* negative ones -- -0.7 would dump as 0, a wire value after the instant encoded.
    return math.floor(dt.timestamp())


UNIX_SECONDS: Final = DateTimeConverter(parse=_parse_unix_seconds, dump=_dump_unix_seconds)

UnixSecondsDateTime: TypeAlias = Annotated[
    datetime,
    BeforeValidator(UNIX_SECONDS.parse),
    PlainSerializer(UNIX_SECONDS.dump, return_type=int),
]


def _parse_date(value: object) -> date:
    """Parse a calendar date from ISO-8601 'YYYY-MM-DD'.

    Accepts a ``date`` as-is, a ``datetime`` (UTC-normalized first if tz-aware, so the
    calendar day matches the instant rather than the author's locale), or a date-only
    string. Strings carrying a time component are rejected rather than truncated.

    Args:
        value: A ``date``, a ``datetime``, or an ISO date string.

    Returns:
        The calendar date ``value`` denotes.

    Raises:
        ValueError: If ``value`` is another type, carries a time component, or is not a valid
            ISO date. Every rejection is a ``ValueError`` so pydantic wraps it rather than
            letting it escape as a broken deserialization contract."""
    if isinstance(value, date) and not isinstance(value, datetime):
        return value

    if isinstance(value, datetime):
        dt = value.astimezone(timezone.utc) if value.tzinfo is not None else value
        return dt.date()

    if isinstance(value, str):
        s = value.strip()
        if "T" in s or " " in s:
            raise ValueError(f"DATE: expected ISO date 'YYYY-MM-DD', got datetime-like string: {value!r}")
        try:
            return date.fromisoformat(s)
        except ValueError as e:
            raise ValueError(f"DATE: invalid ISO date (expected 'YYYY-MM-DD'): {value!r}") from e

    raise ValueError(f"DATE: expected ISO date string, date, or datetime; got {type(value).__name__}")


def _dump_date(value: date) -> str:
    return value.isoformat()


DATE: Final = DateTimeConverter(parse=_parse_date, dump=_dump_date)

Date: TypeAlias = Annotated[
    date,
    BeforeValidator(DATE.parse),
    PlainSerializer(DATE.dump, return_type=str),
]
