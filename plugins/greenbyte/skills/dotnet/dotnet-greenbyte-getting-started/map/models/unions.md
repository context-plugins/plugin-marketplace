# Unions (OneOf / AnyOf)

Union types wrap several `Optional<T>` variants. Construct with a static factory (`Union.Factory(variant)`) or an implicit conversion where listed; read back with the matching `TryGet…(out …)` — it returns `true` when that variant is set. Cells show `—` when the union declares none.

## OneOf (0)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|

## AnyOf (1)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
| `Assignee` | TaskAssigneeUser, TaskAssigneePersonnel, TaskAssigneeManufacturer, TaskAssigneeOther, object | `Assignee.TaskAssigneeUser(TaskAssigneeUser)`, `Assignee.TaskAssigneePersonnel(TaskAssigneePersonnel)`, `Assignee.TaskAssigneeManufacturer(TaskAssigneeManufacturer)`, `Assignee.TaskAssigneeOther(TaskAssigneeOther)`, `Assignee.AnonymousObject(object)` | `TryGetTaskAssigneeUser(out …)`, `TryGetTaskAssigneePersonnel(out …)`, `TryGetTaskAssigneeManufacturer(out …)`, `TryGetTaskAssigneeOther(out …)`, `TryGetAnonymousObject(out …)` | `TaskAssigneeUser`, `TaskAssigneePersonnel`, `TaskAssigneeManufacturer`, `TaskAssigneeOther` | `Models/AnyOf/Assignee.cs` |
