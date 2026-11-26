"""Flattening parameters into wire pairs.

A parameter's value can be a scalar, a model, a mapping, or a collection of any of those, and how a
*collection* explodes into keys depends on the parameter's :class:`SerializationFormat`. This module
does that flattening once; both destinations that carry pairs -- a query string and a form body --
then reach the wire through ``urls.urlencode_params``.

Each parameter arrives carrying the adapter for its declared type, so the wire *format* is decided
there rather than here: :func:`wire_value` dumps through that adapter -- the same step the path and
header renderers use -- and this module is then concerned only with how the result explodes into
keys.

Stateless module functions rather than a class: there is nothing to configure, so there was nothing
for an instance to hold."""

from __future__ import annotations

from collections.abc import Mapping, Sequence
from typing import Any, Final, TypeAlias

from ..params import Param, SerializationFormat
from .wire import is_collection, to_text, wire_value

Pairs: TypeAlias = list[tuple[str, str]]

_SEPARATORS: Final = {
    SerializationFormat.CSV: ",",
    SerializationFormat.TSV: "\t",
    SerializationFormat.PSV: "|",
}


def flatten(params: Sequence[Param[Any]] | None) -> Pairs:
    """Flatten every parameter into ``(key, value)`` pairs, in order.

    Args:
        params: The parameters to flatten; ``None`` is treated as none at all.

    Returns:
        ``(key, text)`` pairs, a repeated key appearing once per value.

    Raises:
        ValueError: If a parameter's value does not match its declared type."""
    pairs: Pairs = []
    for param in params or ():
        pairs.extend(_flatten_value(key=param.key, value=wire_value(param), fmt=param.serialization_format))
    return pairs


def _flatten_value(*, key: str, value: object, fmt: SerializationFormat) -> Pairs:
    if value is None:
        return []

    if isinstance(value, Mapping):
        return [
            pair
            for child_key, child_value in value.items()
            for pair in _flatten_value(key=f"{key}[{child_key}]", value=child_value, fmt=fmt)
        ]

    if is_collection(value):
        values = [v for v in value if v is not None]
        if not values:
            return []

        joined = _try_join(values, fmt)
        if joined is not None:
            return [(key, joined)]

        if fmt is SerializationFormat.INDEXED:
            return [
                pair
                for index, item in enumerate(values)
                for pair in _flatten_value(key=f"{key}[{index}]", value=item, fmt=fmt)
            ]

        if fmt is SerializationFormat.UNINDEXED:
            return [pair for item in values for pair in _flatten_value(key=f"{key}[]", value=item, fmt=fmt)]

        return [pair for item in values for pair in _flatten_value(key=key, value=item, fmt=fmt)]

    return [(key, to_text(value))]


def _try_join(values: Sequence[object], fmt: SerializationFormat) -> str | None:
    """Join ``values`` with ``fmt``'s separator, or ``None`` if ``fmt`` does not join.

    Args:
        values: The already-dumped members to join.
        fmt: The parameter's serialization format.

    Returns:
        The joined text, or ``None`` when ``fmt`` does not join or a member is itself
        structured -- both cases leave the caller to explode the members instead."""
    separator = _SEPARATORS.get(fmt)
    if separator is None:
        return None

    # A nested collection or mapping cannot be represented inside a joined scalar, so the
    # caller falls back to exploding the members under the repeated bare key.
    if any(isinstance(v, Mapping) or is_collection(v) for v in values):
        return None

    return separator.join(to_text(v) for v in values)
