from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Expr2(SdkBaseModel):
    """The condition that is associated with this binding. If the condition evaluates to ``true``, then this binding
    applies to the current request. If the condition evaluates to ``false``, then this binding does not apply to the
    current request. However, a different role binding might grant the same role to one or more of the principals in
    this binding. To learn which resources support conditions in their IAM policies, see the `IAM documentation
    <https://cloud.google.com/iam/help/conditions/resource-policies>`__."""

    location: Optional[str] = UNSET
    """Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position
    in the file."""

    title: Optional[str] = UNSET
    """Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs
    which allow to enter the expression."""

    description: Optional[str] = UNSET
    """Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered
    over it in a UI."""

    expression: Optional[str] = UNSET
    """Textual representation of an expression in Common Expression Language syntax."""


class Expr2Dict(TypedDict):
    location: NotRequired[str]
    title: NotRequired[str]
    description: NotRequired[str]
    expression: NotRequired[str]
