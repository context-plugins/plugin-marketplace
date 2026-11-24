"""Forward-compatible enums: a value the server adds after generation survives as its scalar."""

from __future__ import annotations

from enum import Enum

from pydantic import BeforeValidator


def open_enum_validator(enum_type: type[Enum]) -> BeforeValidator:
    """Coerce a known wire value to its ``enum_type`` member; pass unknown values through unchanged.

    Enum-type-agnostic: works for any ``Enum`` via the generic ``enum_type(value)`` lookup. Pair
    with an ``Enum | <scalar>`` annotation whose fallback arm is the enum's underlying scalar
    type --
    ``Days | str`` for a ``(str, Enum)``, ``Priority | int`` for an ``(int, Enum)``. Known values
    become ergonomic members; values added by the server after generation survive as that raw
    scalar instead of raising. Resolving here (before the union) sidesteps smart-union mis-scoring,
    which would otherwise collapse every value to the scalar arm (pydantic #7110).

    Args:
        enum_type: The closed enum whose members the wire values are looked up in.

    Returns:
        A ``BeforeValidator`` to attach to the open alias with ``Annotated``."""

    def coerce(value: object) -> object:
        if isinstance(value, enum_type):
            return value
        try:
            return enum_type(value)
        except ValueError:
            return value

    return BeforeValidator(coerce)
