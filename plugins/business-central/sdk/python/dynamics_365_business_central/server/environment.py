from __future__ import annotations

from typing import Literal, TypeAlias, get_args

from ..core import validate_one_of

Environment: TypeAlias = Literal["production", "environment2"]


def validate_environment(value: Environment) -> Environment:
    return validate_one_of(value, get_args(Environment), "environment")
