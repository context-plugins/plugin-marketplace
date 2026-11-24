from __future__ import annotations

from typing import Literal, TypeAlias, get_args

from ..core import validate_one_of

Environment: TypeAlias = Literal[
    "production",
    "environment2",
    "environment3",
    "environment4",
    "environment5",
    "environment6",
    "environment7",
    "environment8",
    "environment9",
    "environment10",
]


def validate_environment(value: Environment) -> Environment:
    return validate_one_of(value, get_args(Environment), "environment")
