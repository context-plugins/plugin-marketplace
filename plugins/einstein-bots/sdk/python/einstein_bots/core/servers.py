"""Runtime helpers for the generated ``server/`` layer."""

from __future__ import annotations

from collections.abc import Sequence
from typing import TypeVar

T = TypeVar("T")


def validate_one_of(value: T, allowed: Sequence[T], label: str) -> T:
    """Return ``value`` unchanged, or raise a guided ``ValueError`` naming the valid names.

    The generated ``server/environment.py`` calls this with the arms of its ``Environment``
    literal alias, which is why the check is a membership test rather than an enum lookup: the
    environment is an internal selector for a URL variant and never reaches the wire, so it is
    spelled as a plain string. There is no case or whitespace coercion -- with one spelling per
    environment there is nothing to reconcile.

    Args:
        value: The candidate the caller supplied.
        allowed: Every accepted value, in the order the message should name them.
        label: What ``value`` names, used in the error message (e.g. ``"environment"``).

    Returns:
        ``value`` unchanged.

    Raises:
        ValueError: If ``value`` is not in ``allowed``; the message names every accepted value."""
    if value not in allowed:
        valid = ", ".join(repr(name) for name in allowed)
        raise ValueError(f"{value!r} is not a valid {label}; expected one of {valid}")
    return value
