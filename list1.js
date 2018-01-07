//actiontype, whichpart, changecategory
var actions = [
'ADDITION', 'AnnotationDeclaration_modifier', NULL
'ADDITION', 'AnnotationMemberDeclaration_default', NULL
'ADDITION', 'AnnotationMemberDeclaration_defaultvalue', NULL
'ADDITION', 'ArrayCreationExpr_arraycount', NULL
'ADDITION', 'ArrayCreationExpr_dimension', NULL
'ADDITION', 'ArrayCreationExpr_initializer', NULL
'ADDITION', 'ArrayInitializerExpr_values', NULL
'ADDITION', 'AssertStmt_msg', NULL
'ADDITION', 'BreakStmt_id', NULL
'ADDITION', 'ClassOrInterfaceDeclaration_inheritpart', NULL
'ADDITION', 'ClassOrInterfaceDeclaration_modifier', NULL
'ADDITION', 'ClassOrInterfaceDeclaration_typeparameter', NULL
'ADDITION', 'ConstructorDeclaration_modifier', NULL
'ADDITION', 'ConstructorDeclaration_parameter', NULL
'ADDITION', 'ConstructorDeclaration_throwspart', NULL
'ADDITION', 'ContinueStmt_id', NULL
'ADDITION', 'EnumDeclaration_modifier', NULL
'ADDITION', 'ExplicitConstructorInvocationStmt_arg', NULL
'ADDITION', 'FieldDeclaration_modifier', NULL
'ADDITION', 'FieldDeclaration_variable', NULL
'ADDITION', 'ForStmt_compare', NULL
'ADDITION', 'ForStmt_init', NULL
'ADDITION', 'ForStmt_update', NULL
'ADDITION', 'IfStmt_condition', NULL
'ADDITION', 'MethodCallExpr_arg', NULL
'ADDITION', 'MethodCallExpr_scope', NULL
'ADDITION', 'MethodCallExpr_typearg', NULL
'ADDITION', 'MethodDeclaration_modifier', NULL
'ADDITION', 'MethodDeclaration_parameter', NULL
'ADDITION', 'MethodDeclaration_throwspart', NULL
'ADDITION', 'MethodDeclaration_typeparameter', NULL
'ADDITION', 'ObjectCreationExpr_arg', NULL
'ADDITION', 'Parameter_annotation', NULL
'ADDITION', 'Parameter_isvarargs', NULL
'ADDITION', 'Parameter_modifier', NULL
'ADDITION', 'ReturnStmt_expr', NULL
'ADDITION', 'TypeParameter_typebound', NULL
'ADDITION', 'VariableDeclarationExpr_annotation', NULL
'ADDITION', 'VariableDeclarationExpr_modifier', NULL
'ADDITION', 'VariableDeclarationExpr_variable', NULL
'ADDITION', 'VariableDeclaratorId_arraycount', NULL
'ADDITION', 'VariableDeclarator_init', NULL
'CHANGE', 'AnnotationMemberDeclaration_defaultvalue', 'ContainingCommonTokens'
'CHANGE', 'AnnotationMemberDeclaration_defaultvalue', 'EncapsulatedLR'
'CHANGE', 'AnnotationMemberDeclaration_defaultvalue', 'NonCommonTokens'
'CHANGE', 'AnnotationMemberDeclaration_name', 'NonCommonTokens'
'CHANGE', 'AnnotationMemberDeclaration_type', 'ContainingCommonTokens'
'CHANGE', 'AnnotationMemberDeclaration_type', 'NonCommonTokens'
'CHANGE', 'ArrayAccessExpr_index', 'ContainingCommonTokens'
'CHANGE', 'ArrayAccessExpr_index', 'EncapsulatedLR'
'CHANGE', 'ArrayAccessExpr_index', 'EncapsulatedRL'
'CHANGE', 'ArrayAccessExpr_index', 'NonCommonTokens'
'CHANGE', 'ArrayAccessExpr_name', 'EncapsulatedLR'
'CHANGE', 'ArrayAccessExpr_name', 'EncapsulatedRL'
'CHANGE', 'ArrayAccessExpr_name', 'NonCommonTokens'
'CHANGE', 'ArrayCreationExpr_dimension', 'ContainingCommonTokens'
'CHANGE', 'ArrayCreationExpr_dimension', 'EncapsulatedLR'
'CHANGE', 'ArrayCreationExpr_dimension', 'EncapsulatedRL'
'CHANGE', 'ArrayCreationExpr_dimension', 'MovingAcrossElementParts'
'CHANGE', 'ArrayCreationExpr_dimension', 'NonCommonTokens'
'CHANGE', 'ArrayCreationExpr_initializer', 'ContainingCommonTokens'
'CHANGE', 'ArrayCreationExpr_initializer', 'NonCommonTokens'
'CHANGE', 'ArrayCreationExpr_type', 'ContainingCommonTokens'
'CHANGE', 'ArrayCreationExpr_type', 'NonCommonTokens'
'CHANGE', 'ArrayInitializerExpr_values', 'ContainingCommonTokens'
'CHANGE', 'ArrayInitializerExpr_values', 'EncapsulatedLR'
'CHANGE', 'ArrayInitializerExpr_values', 'EncapsulatedRL'
'CHANGE', 'ArrayInitializerExpr_values', 'NonCommonTokens'
'CHANGE', 'ArrayInitializerExpr_values', 'OrderingChange'
'CHANGE', 'AssertStmt_check', 'EncapsulatedRL'
'CHANGE', 'AssertStmt_msg', 'NonCommonTokens'
'CHANGE', 'AssignExpr_op', 'NonCommonTokens'
'CHANGE', 'AssignExpr_target', 'ContainingCommonTokens'
'CHANGE', 'AssignExpr_target', 'EncapsulatedLR'
'CHANGE', 'AssignExpr_target', 'EncapsulatedRL'
'CHANGE', 'AssignExpr_target', 'NonCommonTokens'
'CHANGE', 'AssignExpr_value', 'ContainingCommonTokens'
'CHANGE', 'AssignExpr_value', 'EncapsulatedLR'
'CHANGE', 'AssignExpr_value', 'EncapsulatedRL'
'CHANGE', 'AssignExpr_value', 'MovingAcrossElementParts'
'CHANGE', 'AssignExpr_value', 'NonCommonTokens'
'CHANGE', 'BinaryExpr_left', 'ContainingCommonTokens'
'CHANGE', 'BinaryExpr_left', 'EncapsulatedLR'
'CHANGE', 'BinaryExpr_left', 'EncapsulatedRL'
'CHANGE', 'BinaryExpr_left', 'MovingAcrossElementParts'
'CHANGE', 'BinaryExpr_left', 'NonCommonTokens'
'CHANGE', 'BinaryExpr_op', 'NonCommonTokens'
'CHANGE', 'BinaryExpr_right', 'ContainingCommonTokens'
'CHANGE', 'BinaryExpr_right', 'EncapsulatedLR'
'CHANGE', 'BinaryExpr_right', 'EncapsulatedRL'
'CHANGE', 'BinaryExpr_right', 'MovingAcrossElementParts'
'CHANGE', 'BinaryExpr_right', 'NonCommonTokens'
'CHANGE', 'BreakStmt_id', 'NonCommonTokens'
'CHANGE', 'CastExpr_expr', 'ContainingCommonTokens'
'CHANGE', 'CastExpr_expr', 'EncapsulatedLR'
'CHANGE', 'CastExpr_expr', 'EncapsulatedRL'
'CHANGE', 'CastExpr_expr', 'MovingAcrossElementParts'
'CHANGE', 'CastExpr_expr', 'NonCommonTokens'
'CHANGE', 'CastExpr_type', 'ContainingCommonTokens'
'CHANGE', 'CastExpr_type', 'NonCommonTokens'
'CHANGE', 'CatchClause_except', 'NonCommonTokens'
'CHANGE', 'CharLiteralExpr_value', 'NonCommonTokens'
'CHANGE', 'ClassExpr_type', 'ContainingCommonTokens'
'CHANGE', 'ClassExpr_type', 'NonCommonTokens'
'CHANGE', 'ClassOrInterfaceDeclaration_inheritpart', 'ContainingCommonTokens'
'CHANGE', 'ClassOrInterfaceDeclaration_inheritpart', 'EncapsulatedRL'
'CHANGE', 'ClassOrInterfaceDeclaration_inheritpart', 'NonCommonTokens'
'CHANGE', 'ClassOrInterfaceDeclaration_inheritpart', 'OrderingChange'
'CHANGE', 'ClassOrInterfaceDeclaration_inherits', 'NonCommonTokens'
'CHANGE', 'ClassOrInterfaceDeclaration_isinterface', 'NonCommonTokens'
'CHANGE', 'ClassOrInterfaceDeclaration_modifier', 'NonCommonTokens'
'CHANGE', 'ClassOrInterfaceDeclaration_name', 'NonCommonTokens'
'CHANGE', 'ClassOrInterfaceDeclaration_typeparameter', 'ContainingCommonTokens'
'CHANGE', 'ClassOrInterfaceDeclaration_typeparameter', 'NonCommonTokens'
'CHANGE', 'ConditionalExpr_condition', 'ContainingCommonTokens'
'CHANGE', 'ConditionalExpr_condition', 'EncapsulatedLR'
'CHANGE', 'ConditionalExpr_condition', 'EncapsulatedRL'
'CHANGE', 'ConditionalExpr_condition', 'MovingAcrossElementParts'
'CHANGE', 'ConditionalExpr_condition', 'NonCommonTokens'
'CHANGE', 'ConditionalExpr_elseexpr', 'ContainingCommonTokens'
'CHANGE', 'ConditionalExpr_elseexpr', 'EncapsulatedLR'
'CHANGE', 'ConditionalExpr_elseexpr', 'EncapsulatedRL'
'CHANGE', 'ConditionalExpr_elseexpr', 'MovingAcrossElementParts'
'CHANGE', 'ConditionalExpr_elseexpr', 'NonCommonTokens'
'CHANGE', 'ConditionalExpr_thenexpr', 'ContainingCommonTokens'
'CHANGE', 'ConditionalExpr_thenexpr', 'EncapsulatedLR'
'CHANGE', 'ConditionalExpr_thenexpr', 'EncapsulatedRL'
'CHANGE', 'ConditionalExpr_thenexpr', 'MovingAcrossElementParts'
'CHANGE', 'ConditionalExpr_thenexpr', 'NonCommonTokens'
'CHANGE', 'ConstructorDeclaration->ConstructorDeclaration', 'NonCommonTokens'
'CHANGE', 'ConstructorDeclaration_modifier', 'NonCommonTokens'
'CHANGE', 'ConstructorDeclaration_name', 'NonCommonTokens'
'CHANGE', 'ConstructorDeclaration_parameter', 'ContainingCommonTokens'
'CHANGE', 'ConstructorDeclaration_parameter', 'NonCommonTokens'
'CHANGE', 'ConstructorDeclaration_parameter', 'OrderingChange'
'CHANGE', 'ConstructorDeclaration_throwspart', 'NonCommonTokens'
'CHANGE', 'ContinueStmt_id', 'NonCommonTokens'
'CHANGE', 'DoStmt_condition', 'EncapsulatedLR'
'CHANGE', 'DoStmt_condition', 'EncapsulatedRL'
'CHANGE', 'DoStmt_condition', 'MovingAcrossElementParts'
'CHANGE', 'DoStmt_condition', 'NonCommonTokens'
'CHANGE', 'EnclosedExpr_inner', 'ContainingCommonTokens'
'CHANGE', 'EnclosedExpr_inner', 'EncapsulatedLR'
'CHANGE', 'EnclosedExpr_inner', 'EncapsulatedRL'
'CHANGE', 'EnumConstantDeclaration->EnumConstantDeclaration', 'NonCommonTokens'
'CHANGE', 'EnumDeclaration_modifier', 'NonCommonTokens'
'CHANGE', 'ExplicitConstructorInvocationStmt->ExplicitConstructorInvocationStmt', 'NonCommonTokens'
'CHANGE', 'ExplicitConstructorInvocationStmt_arg', 'ContainingCommonTokens'
'CHANGE', 'ExplicitConstructorInvocationStmt_arg', 'EncapsulatedLR'
'CHANGE', 'ExplicitConstructorInvocationStmt_arg', 'EncapsulatedRL'
'CHANGE', 'ExplicitConstructorInvocationStmt_arg', 'NonCommonTokens'
'CHANGE', 'ExplicitConstructorInvocationStmt_arg', 'OrderingChange'
'CHANGE', 'ExplicitConstructorInvocationStmt_isthis', 'NonCommonTokens'
'CHANGE', 'ExpressionStmt->ExpressionStmt', 'NonCommonTokens'
'CHANGE', 'ExpressionStmt_expr', 'ContainingCommonTokens'
'CHANGE', 'ExpressionStmt_expr', 'EncapsulatedLR'
'CHANGE', 'ExpressionStmt_expr', 'EncapsulatedRL'
'CHANGE', 'ExpressionStmt_expr', 'MovingAcrossElementParts'
'CHANGE', 'FieldAccessExpr_name', 'NonCommonTokens'
'CHANGE', 'FieldAccessExpr_scope', 'ContainingCommonTokens'
'CHANGE', 'FieldAccessExpr_scope', 'EncapsulatedLR'
'CHANGE', 'FieldAccessExpr_scope', 'EncapsulatedRL'
'CHANGE', 'FieldAccessExpr_scope', 'NonCommonTokens'
'CHANGE', 'FieldDeclaration->FieldDeclaration', 'NonCommonTokens'
'CHANGE', 'FieldDeclaration_modifier', 'NonCommonTokens'
'CHANGE', 'FieldDeclaration_type', 'ContainingCommonTokens'
'CHANGE', 'FieldDeclaration_type', 'NonCommonTokens'
'CHANGE', 'FieldDeclaration_variable', 'ContainingCommonTokens'
'CHANGE', 'FieldDeclaration_variable', 'NonCommonTokens'
'CHANGE', 'FieldDeclaration_variable', 'OrderingChange'
'CHANGE', 'ForeachStmt_iterable', 'ContainingCommonTokens'
'CHANGE', 'ForeachStmt_iterable', 'EncapsulatedLR'
'CHANGE', 'ForeachStmt_iterable', 'EncapsulatedRL'
'CHANGE', 'ForeachStmt_iterable', 'NonCommonTokens'
'CHANGE', 'ForeachStmt_var', 'ContainingCommonTokens'
'CHANGE', 'ForeachStmt_var', 'NonCommonTokens'
'CHANGE', 'ForStmt_compare', 'ContainingCommonTokens'
'CHANGE', 'ForStmt_compare', 'EncapsulatedLR'
'CHANGE', 'ForStmt_compare', 'EncapsulatedRL'
'CHANGE', 'ForStmt_compare', 'MovingAcrossElementParts'
'CHANGE', 'ForStmt_compare', 'NonCommonTokens'
'CHANGE', 'ForStmt_init', 'ContainingCommonTokens'
'CHANGE', 'ForStmt_update', 'ContainingCommonTokens'
'CHANGE', 'ForStmt_update', 'NonCommonTokens'
'CHANGE', 'IfStmt->IfStmt', 'ContainingCommonTokens'
'CHANGE', 'IfStmt_condition', 'ContainingCommonTokens'
'CHANGE', 'IfStmt_condition', 'EncapsulatedLR'
'CHANGE', 'IfStmt_condition', 'EncapsulatedRL'
'CHANGE', 'IfStmt_condition', 'MovingAcrossElementParts'
'CHANGE', 'IfStmt_condition', 'NonCommonTokens'
'CHANGE', 'ImportDeclaration_name', 'EncapsulatedLR'
'CHANGE', 'ImportDeclaration_name', 'NonCommonTokens'
'CHANGE', 'InstanceOfExpr_expr', 'ContainingCommonTokens'
'CHANGE', 'InstanceOfExpr_expr', 'EncapsulatedLR'
'CHANGE', 'InstanceOfExpr_expr', 'EncapsulatedRL'
'CHANGE', 'InstanceOfExpr_expr', 'NonCommonTokens'
'CHANGE', 'InstanceOfExpr_type', 'ContainingCommonTokens'
'CHANGE', 'InstanceOfExpr_type', 'NonCommonTokens'
'CHANGE', 'MethodCallExpr_arg', 'ContainingCommonTokens'
'CHANGE', 'MethodCallExpr_arg', 'EncapsulatedLR'
'CHANGE', 'MethodCallExpr_arg', 'EncapsulatedRL'
'CHANGE', 'MethodCallExpr_arg', 'MovingAcrossElementParts'
'CHANGE', 'MethodCallExpr_arg', 'NonCommonTokens'
'CHANGE', 'MethodCallExpr_arg', 'OrderingChange'
'CHANGE', 'MethodCallExpr_arg->scope', 'EncapsulatedLR'
'CHANGE', 'MethodCallExpr_arg->scope', 'EncapsulatedRL'
'CHANGE', 'MethodCallExpr_name', 'NonCommonTokens'
'CHANGE', 'MethodCallExpr_scope', 'ContainingCommonTokens'
'CHANGE', 'MethodCallExpr_scope', 'EncapsulatedLR'
'CHANGE', 'MethodCallExpr_scope', 'EncapsulatedRL'
'CHANGE', 'MethodCallExpr_scope', 'MovingAcrossElementParts'
'CHANGE', 'MethodCallExpr_scope', 'NonCommonTokens'
'CHANGE', 'MethodCallExpr_scope->arg', 'EncapsulatedLR'
'CHANGE', 'MethodCallExpr_scope->arg', 'EncapsulatedRL'
'CHANGE', 'MethodCallExpr_typearg', 'ContainingCommonTokens'
'CHANGE', 'MethodCallExpr_typearg', 'EncapsulatedLR'
'CHANGE', 'MethodCallExpr_typearg', 'NonCommonTokens'
'CHANGE', 'MethodDeclaration->MethodDeclaration', 'NonCommonTokens'
'CHANGE', 'MethodDeclaration_modifier', 'NonCommonTokens'
'CHANGE', 'MethodDeclaration_name', 'NonCommonTokens'
'CHANGE', 'MethodDeclaration_parameter', 'ContainingCommonTokens'
'CHANGE', 'MethodDeclaration_parameter', 'NonCommonTokens'
'CHANGE', 'MethodDeclaration_parameter', 'OrderingChange'
'CHANGE', 'MethodDeclaration_throwspart', 'EncapsulatedRL'
'CHANGE', 'MethodDeclaration_throwspart', 'NonCommonTokens'
'CHANGE', 'MethodDeclaration_throwspart', 'OrderingChange'
'CHANGE', 'MethodDeclaration_type', 'ContainingCommonTokens'
'CHANGE', 'MethodDeclaration_type', 'NonCommonTokens'
'CHANGE', 'MethodDeclaration_typeparameter', 'OrderingChange'
'CHANGE', 'ObjectCreationExpr_arg', 'ContainingCommonTokens'
'CHANGE', 'ObjectCreationExpr_arg', 'EncapsulatedLR'
'CHANGE', 'ObjectCreationExpr_arg', 'EncapsulatedRL'
'CHANGE', 'ObjectCreationExpr_arg', 'MovingAcrossElementParts'
'CHANGE', 'ObjectCreationExpr_arg', 'NonCommonTokens'
'CHANGE', 'ObjectCreationExpr_arg', 'OrderingChange'
'CHANGE', 'ObjectCreationExpr_scope', 'EncapsulatedRL'
'CHANGE', 'ObjectCreationExpr_type', 'ContainingCommonTokens'
'CHANGE', 'ObjectCreationExpr_type', 'NonCommonTokens'
'CHANGE', 'PackageDeclaration_name', 'EncapsulatedLR'
'CHANGE', 'PackageDeclaration_name', 'EncapsulatedRL'
'CHANGE', 'PackageDeclaration_name', 'NonCommonTokens'
'CHANGE', 'Parameter_name', 'NonCommonTokens'
'CHANGE', 'Parameter_type', 'ContainingCommonTokens'
'CHANGE', 'Parameter_type', 'NonCommonTokens'
'CHANGE', 'QualifiedNameExpr_name', 'NonCommonTokens'
'CHANGE', 'QualifiedNameExpr_qualifier', 'EncapsulatedLR'
'CHANGE', 'ReturnStmt_expr', 'ContainingCommonTokens'
'CHANGE', 'ReturnStmt_expr', 'EncapsulatedLR'
'CHANGE', 'ReturnStmt_expr', 'EncapsulatedRL'
'CHANGE', 'ReturnStmt_expr', 'MovingAcrossElementParts'
'CHANGE', 'ReturnStmt_expr', 'NonCommonTokens'
'CHANGE', 'SingleMemberAnnotationExpr_membervalue', 'EncapsulatedLR'
'CHANGE', 'SingleMemberAnnotationExpr_membervalue', 'EncapsulatedRL'
'CHANGE', 'SwitchEntryStmt->SwitchEntryStmt', 'NonCommonTokens'
'CHANGE', 'SwitchEntryStmt_label', 'ContainingCommonTokens'
'CHANGE', 'SwitchEntryStmt_label', 'EncapsulatedLR'
'CHANGE', 'SwitchEntryStmt_label', 'EncapsulatedRL'
'CHANGE', 'SwitchEntryStmt_label', 'NonCommonTokens'
'CHANGE', 'SwitchStmt_selector', 'ContainingCommonTokens'
'CHANGE', 'SwitchStmt_selector', 'EncapsulatedLR'
'CHANGE', 'SwitchStmt_selector', 'EncapsulatedRL'
'CHANGE', 'SwitchStmt_selector', 'NonCommonTokens'
'CHANGE', 'SynchronizedStmt_expr', 'ContainingCommonTokens'
'CHANGE', 'SynchronizedStmt_expr', 'EncapsulatedLR'
'CHANGE', 'SynchronizedStmt_expr', 'EncapsulatedRL'
'CHANGE', 'SynchronizedStmt_expr', 'NonCommonTokens'
'CHANGE', 'ThrowStmt_expr', 'ContainingCommonTokens'
'CHANGE', 'ThrowStmt_expr', 'EncapsulatedLR'
'CHANGE', 'ThrowStmt_expr', 'EncapsulatedRL'
'CHANGE', 'ThrowStmt_expr', 'NonCommonTokens'
'CHANGE', 'TypeParameter_typebound', 'ContainingCommonTokens'
'CHANGE', 'TypeParameter_typebound', 'NonCommonTokens'
'CHANGE', 'UnaryExpr_expr', 'ContainingCommonTokens'
'CHANGE', 'UnaryExpr_expr', 'EncapsulatedLR'
'CHANGE', 'UnaryExpr_expr', 'EncapsulatedRL'
'CHANGE', 'UnaryExpr_expr', 'MovingAcrossElementParts'
'CHANGE', 'UnaryExpr_expr', 'NonCommonTokens'
'CHANGE', 'UnaryExpr_expr', 'OrderingChange'
'CHANGE', 'UnaryExpr_op', 'NonCommonTokens'
'CHANGE', 'UnaryExpr_op', 'OrderingChange'
'CHANGE', 'VariableDeclarationExpr_type', 'ContainingCommonTokens'
'CHANGE', 'VariableDeclarationExpr_type', 'NonCommonTokens'
'CHANGE', 'VariableDeclarationExpr_variable', 'ContainingCommonTokens'
'CHANGE', 'VariableDeclarationExpr_variable', 'NonCommonTokens'
'CHANGE', 'VariableDeclarationExpr_variable', 'OrderingChange'
'CHANGE', 'VariableDeclarator_id', 'NonCommonTokens'
'CHANGE', 'VariableDeclarator_init', 'ContainingCommonTokens'
'CHANGE', 'VariableDeclarator_init', 'EncapsulatedLR'
'CHANGE', 'VariableDeclarator_init', 'EncapsulatedRL'
'CHANGE', 'VariableDeclarator_init', 'MovingAcrossElementParts'
'CHANGE', 'VariableDeclarator_init', 'NonCommonTokens'
'CHANGE', 'WhileStmt_condition', 'ContainingCommonTokens'
'CHANGE', 'WhileStmt_condition', 'EncapsulatedLR'
'CHANGE', 'WhileStmt_condition', 'EncapsulatedRL'
'CHANGE', 'WhileStmt_condition', 'NonCommonTokens'
'DELETION', 'AnnotationMemberDeclaration_default', NULL
'DELETION', 'AnnotationMemberDeclaration_defaultvalue', NULL
'DELETION', 'ArrayCreationExpr_arraycount', NULL
'DELETION', 'ArrayCreationExpr_dimension', NULL
'DELETION', 'ArrayCreationExpr_initializer', NULL
'DELETION', 'ArrayInitializerExpr_values', NULL
'DELETION', 'BreakStmt_id', NULL
'DELETION', 'ClassOrInterfaceDeclaration_inheritpart', NULL
'DELETION', 'ClassOrInterfaceDeclaration_modifier', NULL
'DELETION', 'ClassOrInterfaceDeclaration_typeparameter', NULL
'DELETION', 'ConstructorDeclaration_modifier', NULL
'DELETION', 'ConstructorDeclaration_parameter', NULL
'DELETION', 'ConstructorDeclaration_throwspart', NULL
'DELETION', 'ContinueStmt_id', NULL
'DELETION', 'EnumDeclaration_modifier', NULL
'DELETION', 'ExplicitConstructorInvocationStmt_arg', NULL
'DELETION', 'FieldDeclaration_modifier', NULL
'DELETION', 'FieldDeclaration_variable', NULL
'DELETION', 'ForStmt_compare', NULL
'DELETION', 'ForStmt_init', NULL
'DELETION', 'ForStmt_update', NULL
'DELETION', 'IfStmt_condition', NULL
'DELETION', 'ImportDeclaration_isasterrisk', NULL
'DELETION', 'MethodCallExpr_arg', NULL
'DELETION', 'MethodCallExpr_scope', NULL
'DELETION', 'MethodCallExpr_typearg', NULL
'DELETION', 'MethodDeclaration_modifier', NULL
'DELETION', 'MethodDeclaration_parameter', NULL
'DELETION', 'MethodDeclaration_throwspart', NULL
'DELETION', 'MethodDeclaration_typeparameter', NULL
'DELETION', 'ObjectCreationExpr_arg', NULL
'DELETION', 'Parameter_annotation', NULL
'DELETION', 'Parameter_isvarargs', NULL
'DELETION', 'Parameter_modifier', NULL
'DELETION', 'ReturnStmt_expr', NULL
'DELETION', 'TypeParameter_typebound', NULL
'DELETION', 'VariableDeclarationExpr_annotation', NULL
'DELETION', 'VariableDeclarationExpr_modifier', NULL
'DELETION', 'VariableDeclarationExpr_variable', NULL
'DELETION', 'VariableDeclaratorId_arraycount', NULL
'DELETION', 'VariableDeclarator_init', NULL
];